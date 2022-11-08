import React, { useState, useEffect } from 'react'
import axios from "axios"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

export default function Visualize() {
    const [contacts, setContact] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/display')
            .then(res => {
                setContact(res.data)
            })
    }, [])
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const contactsData = [{ 'January': 0 }, { 'February': 0 }, { 'March': 0 }, { 'April': 0 }, { 'May': 0 }, { 'June': 0 }, { 'July': 0 }, { 'August': 0 }, { 'September': 0 }, { 'October': 0 }, { 'November': 0 }, { 'December': 0 }]

    contacts.map(item => contactsData[parseInt(item.date.split("-")[1]) - 1][labels[parseInt(item.date.split("-")[1]) - 1]]++)

    console.log(contactsData.map(item => Object.values(item)))
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: contactsData.map(item => Object.values(item)),
                backgroundColor: '#007bff',
            },
        ],
    };
    return (
        <>
            <div className='container'>
                <h1 style={{ color: '#007bff' }}>Visualize</h1>
                <Bar options={options} data={data} />
            </div>
        </>
    )
}
