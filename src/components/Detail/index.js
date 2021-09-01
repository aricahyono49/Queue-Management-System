import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css';

const {date} = new Date(); 
console.log(date)

export const DetailAntrian = () => {
    return (
        <div>
            <h2>Info Antrian Hari Ini ()</h2>
            <div class="container">
                <div class="row">
                    <div class="col-6">Bank</div>
                    <div class="col-1">:</div>
                    <div class="col">'Cabang'</div>
                </div>
                <div class="row">
                    <div class="col-6">Alamat</div>
                    <div class="col-1">:</div>
                    <div class="col">'Alamat Bank'</div>
                </div>
                <div class="row">
                    <div class="col-6">Nomor antrian yang sedang dilayani saat ini</div>
                    <div class="col-1">:</div>
                    <div class="col">'Nomor Antrian'</div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <button>Kembali</button>
                    <button>Booking untuk besok</button>
                </div>
            </div>
        </div>
    )
}