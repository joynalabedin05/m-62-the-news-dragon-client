import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h4>Terms and condition </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat inventore voluptatibus delectus facere alias enim itaque fuga molestiae nulla nam ea obcaecati optio quis, amet, in id maxime minus eum.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>

        </div>
    );
};

export default Terms;