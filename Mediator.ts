// EDA = EVENT DRIVE ARCHITECTURE

interface DomainEvent {
  name: string;
}

interface Handler {
  eventName: string;
  handle(event: DomainEvent): Promise<void>;
}

// FOCADO NO DOMINIO!!!!!!!!

class Mediator {
  public handlers: Handler[] = [];

  register(handler: Handler) {
    this.handlers.push(handler);
  }

  async publish(event: DomainEvent) {
    for (const handler of this.handlers) {
      if (handler.eventName === event.name) {
        await handler.handle(event);
      }
    }
  }
}

interface Mailer {
  send(message: string, email: string): Promise<void>;
}

class MailerQ implements Mailer {
  async send(message: string, email: string): Promise<void> {
    console.log("Email enviado para", email, "com a mensagem", message);
  }
}

class Aluno {
  constructor(public nome: string, public email: string) {}
}

const db: Aluno[] = [];

class AlunoCadastradoDomainEvent implements DomainEvent {
  name: string = "aluno cadastrado";
  constructor(public aluno: Aluno) {}
}

class AlunoCadastradoHandler implements Handler {
  eventName: string = "aluno cadastrado";
  constructor(private mailer: Mailer) {}
  async handle(event: AlunoCadastradoDomainEvent): Promise<void> {
    await this.mailer.send(`Bem vindo ${event.aluno.nome}!`, event.aluno.email);
  }
}

const mediator = new Mediator();

mediator.register(new AlunoCadastradoHandler(new MailerQ()));

async function cadastrarAluno(nome: string, email: string) {
  const aluno = new Aluno(nome, email);
  db.push(aluno);
  // Enviar o email
  await mediator.publish(new AlunoCadastradoDomainEvent(aluno));
  console.log("Aluno cadastrado com sucesso!");
}

(async () => await cadastrarAluno("Fernando", "fernando@darwin.agency"))();
