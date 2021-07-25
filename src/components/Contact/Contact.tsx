import React from "react";

interface IProps {
  name: string;
  email?: string;
  handleRemove: (email: string) => void;
}

const Contact = ({ name, email="N/A",handleRemove }: IProps) => {
 

  return (
    <div className="card mt-3">
      <p>
        <strong>Name: </strong>
        {name}
      </p>
      <p>
        <strong>Email: </strong>
        {email}
      </p>

      <button className="btn btn-danger" onClick={()=>handleRemove(email)}>Remove</button>
    </div>
  );
};

export default Contact;
