const Breadcrumb = ({ items } : { items: { label: string; link?: string }[] }) => {
  return (
    <nav aria-label="breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {item.link ? (
            <a href={item.link}>{item.label}</a>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && " › "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
