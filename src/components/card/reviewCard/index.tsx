type ReviewCardProps = {
    onClick?: (...args: any[]) => any;
    name: string;
    body: string;
    
  };

export default function ReviewCard(props: ReviewCardProps) {
    const {onClick, name , body} = props
  return (
    <div className="card col-3 mx-1 my-1 "  onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
         {body}
        </p>
        <a href="#" className="btn btn-primary" style={{background:'#28a745', border:"1px solid #28a745"}}>
          Go somewhere
        </a>
      </div>
    </div>
  );
}
