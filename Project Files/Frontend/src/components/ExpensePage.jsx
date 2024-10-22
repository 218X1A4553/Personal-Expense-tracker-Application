import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ExpensePage() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/expense', { title, amount },{withCredentials:true});
            navigate('/home');
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    return (
        <div className="expense-container">
        <h1>Add Expense</h1>
        <form className="expense-form" onSubmit={handleSubmit}>
          <input className="expense-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          <input className="expense-input" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
          <button className="expense-button" type="submit">Add Expense</button>
        </form>
      </div>
      
    );
}

export default ExpensePage;
