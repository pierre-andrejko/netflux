import "../assets/Liste.css";

function Liste({ title, items }) {
  return (
    <div className="list">
      <h2 className="list_title">{title}</h2>
      <div className="list_items">
        {items &&
          items.map((item) => {
            {
              return <img src={item} />;
            }
          })}
      </div>
    </div>
  );
}

export default Liste;