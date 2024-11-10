import { useCallback, useState } from 'react';

import { Button } from '../button';
import { Dialog } from '../dialog';
import { Input } from '../input';
import { Title } from '../title';
import { Container } from './styles';

export function CreateCategoryDialog() {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onSubmit = useCallback(() => {
    handleClose();
  }, [handleClose]);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nova categoria</Button>}
    >
      <Container>
        <Title
          title="Nova Categoria"
          subtitle="Crie uma nova categoria para suas transações"
        />

        <form>
          <div>
            <Input label="Nome" placeholder="Nome da categoria..." />
            <Input label="Cor" type="color" />
          </div>
          <footer>
            <Button variant="outline" type="button" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="button" onClick={onSubmit}>
              Cadastrar
            </Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
