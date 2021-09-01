import React from 'react'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css';
import 'moment/locale/id'
moment.locale('id')

const dateTime = new Date()

export const DetailAntrian = () => {
    return (
        <div>
            <div>
                <h2>Info Antrian Hari Ini <span>({moment(dateTime).format('dddd, LL')})</span></h2>
                <div class="container tb">
                    <div class="row mb-3">
                        <div class="col-6">Bank</div>
                        <div class="col-1">:</div>
                        <div class="col">'Cabang'</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-6">Alamat</div>
                        <div class="col-1">:</div>
                        <div class="col">'Alamat Bank'</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-6">Nomor antrian yang sedang dilayani saat ini</div>
                        <div class="col-1">:</div>
                        <div class="col">'Nomor Antrian' <span>(pukul {moment().format('LT')})</span></div>
                    </div>
                </div>
            </div>
            
            <div class="position-relative">
                <div class="position-absolute bottom-left">
                    <button type="button" class="btn btn-primary rad" href="#" >
                        <i class="bi bi-arrow-left-short"></i>Kembali
                    </button>                    
                </div>
                <div class="position-absolute bottom-right">
                    <button type="button" class="btn btn-success rad" href="#" >
                        Booking untuk besok<i class="bi bi-arrow-right-short"></i>
                    </button>
                </div>
            </div>

        </div>
    )
}