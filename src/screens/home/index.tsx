import { Button } from '../../components/button';
import { Logo } from '../../components/logo';
import { Header } from './styles';

export function Home() {
  return (
    <Header>
      <Logo />
      <div>
        <Button>Nova transação</Button>
        <Button>Nova categoria</Button>
      </div>
    </Header>
  );
}
