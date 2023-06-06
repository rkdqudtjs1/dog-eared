type Props = {
  title: string;
  description?: string;
};

const Empty = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-1 mx-auto py-11 text-grey-6">
      <div className="text-lg">{title}</div>
      {description && <div className="text-sm">{description}</div>}
    </div>
  );
};

export default Empty;
