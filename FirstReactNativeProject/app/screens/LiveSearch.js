import React, { useState } from 'react';

const App = () => {
    const [input, setInput] = useState("");
    let school = [
        { name: "Nguyen Manh Quoc Viet", username: "Viet" },
        { name: "Thanh Vinh Do Vu", username: "Vinh" },
        { name: "Tran Minh Duc", username: "Duc" },
        { name: "Nguyen Anh Tuan", username: "Tuan" },
    ];

    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value);
    }

    if(input.length > 0) {
        school = school.filter((i) => {
            return i.name.match(input);
        })
    }

    return (
        <div>
            <input 
            type = "text"
            placeholder="Search Name"
            onChange={handleChange}
            value={input}/>
            {school.map((student, index) => {
                return (
                    <div key={index}>
                        <ul>
                            <li>
                                {student.name} - {student.username}
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};
export default App;