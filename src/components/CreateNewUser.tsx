import { Badge, Button, Card, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useUserActions } from '../hooks/useUserActions';

export const CreateNewUser = () => {
  const { addUser } = useUserActions();
  const [result, setResult] = useState<'ok' | 'ko' | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const github = formData.get('github') as string;

    // Validate name
    if (!name || name.trim() === '') {
      return setResult('ko');
    }

    // Validate email with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return setResult('ko');
    }

    // Validate github username
    if (!github || github.trim() === '') {
      return setResult('ko');
    }

    addUser({ name, email, github });
    setResult('ok');
    form.reset();
  };

  return (
    <Card className="w-full p-5">
      <h2 className="text-2xl font-semibold">Crear nuevo usuario</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInput name="name" placeholder="John Doe" required />
        <TextInput
          name="email"
          type="email"
          placeholder="john.doe@example.com"
          required
        />
        <TextInput name="github" placeholder="johndoe" required />
        <div>
          <Button type="submit" className="justify-self-center">
            Crear usuario
          </Button>
          <span>
            {result === 'ok' && (
              <Badge color="info" className="ml-4">
                Usuario creado
              </Badge>
            )}
            {result === 'ko' && (
              <Badge className="ml-4" color="failure">
                Error al crear usuario
              </Badge>
            )}
          </span>
        </div>
      </form>
    </Card>
  );
};
