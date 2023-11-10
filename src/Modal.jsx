import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
      // <div className="modal">
      //   <div className="modal-dialog">
      //     <div className="modal-content">
      //       <div className="modal-header">
      //         <h5>{props.post.title}</h5>
      //         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      //       </div>
      //       <div className="modal-body">
      //         <p>{props.post.body}</p>
      //         <img src={props.post.image} alt="" />
      //       </div>
      //       <div className="modal-footer">
      //         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
      //           Close
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
