import { formatCurrency } from '../../utils/format-currency';
import { Container, Info, Content } from './styles';

type TransactionProps = {
  id: number;
  title: string;
  date: string;
  amount: number;
  category: {
    title: string;
    color: string;
  };
  variant?: 'income' | 'expense';
};

export function Transaction({
  id,
  title,
  date,
  amount,
  category,
  variant = 'income',
}: TransactionProps) {
  return (
    <Container>
      <Info>
        <span>#{id.toString().padStart(4, '0')}</span>
        {/* padStart: na primeira posição informamos quantos caracteres queremos
        que a string tenha no total. Na segunda posição, informamos qual 
        caracter vai preencher caso a string não tenha o total de caracteres informado
        (será preenchido para a esquerda)
         */}
        <div>
          <strong>{title}</strong>
          <span>{date}</span>
        </div>
      </Info>

      <Content $variant={variant} $tagColor={category.color}>
        <strong>{formatCurrency(amount)}</strong>
        <span>{category.title.toUpperCase()}</span>
      </Content>
    </Container>
  );
}