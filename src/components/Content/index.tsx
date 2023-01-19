import './styles.css'

type Props = {
  text: string;
};

export default function Content({ text }: Props) {
  return <div className="content">{text}</div>;
}
