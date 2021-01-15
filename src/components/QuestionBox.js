import React,{useState} from 'react';

const QuestionBox = (props) =>{

    const [answer, setAnswer] = useState(props.options);
    return(
        <div className="bg-secondary p-3 m-1" key={props.keys}>
            <div className='text-black'>{props.q}</div>
            {answer.map((val,pos) => 
                <button key={pos} className="bg-light m-1" style={{borderRadius:'5px'}}
                onClick={() => {
                    setAnswer([val]); //[val] val is defined in the [] to sy it is array
                    props.selected(val);
                }}
                >{val}
                </button>
            )}
        </div>
    );
};

export default QuestionBox;