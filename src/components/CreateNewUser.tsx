import { Button, Card, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { toast } from 'sonner';
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
      toast.error('El nombre es obligatorio');
      return setResult('ko');
    }

    // Validate email with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error('El email no es válido');
      return setResult('ko');
    }

    // Validate github username
    if (!github || github.trim() === '') {
      toast.error('El nombre de usuario de GitHub es obligatorio');
      return setResult('ko');
    }

    addUser({ name, email, github });
    setResult('ok');
    toast.success('Usuario creado correctamente');
    form.reset();
  };

  return (
    <Card className="w-full p-5">
      <h2 className="text-2xl font-semibold">Crear nuevo usuario</h2>
      {result === 'ok' && (
        <p className="text-green-500 mb-2">Usuario creado correctamente</p>
      )}
      {result === 'ko' && (
        <p className="text-red-500 mb-2">Error al crear usuario</p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInput name="name" placeholder="John Doe" required />
        <TextInput
          name="email"
          type="email"
          placeholder="john.doe@example.com"
          required
        />
        <TextInput name="github" placeholder="johndoe" required />
        <Button type="submit" className="self-center w-fit">
          Crear usuario
        </Button>
      </form>
    </Card>
  );
};
