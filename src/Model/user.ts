export class User {
    private id: number;
    private lastname: string;
    private firstname: string;
    private email: string;

    constructor(id: number, lastname: string, firstname: string, email: string,) {
        this.id = id;
        this.lastname = lastname;
        this.firstname= firstname;
        this.email = email;
    }

    // Méthodes pour accéder et modifier les attributs privés
    getId(): number {
        return this.id;
    }

    getLastname(): string {
        return this.lastname;
    }
    getFirstname(): string {
        return this.lastname;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }
}

