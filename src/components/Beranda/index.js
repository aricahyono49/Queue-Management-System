import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css';

function Beranda() {
    const noAntrian = 87;
    const bank = 'Bank KCP Banjaran';
    const keperluan = 'Transaksi (dilayani oleh Teller)';
    const date = "Jum'at, 9 Juni 2021";
    const timeStart = '9.00';
    const timeEnd = '9.30';

    return (
        <div class="container">
            <div class="my-3">
                <div class="h2 mb-5" > Detail Booking</div>
                <div class="mb-5">
                    <div class="row mb-4" >
                        <div class="col-sm-3">
                            Nomor Antrian
                        </div>
                        <div class="col-sm-9">
                            : &emsp; {noAntrian}
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-3">
                            Bank Tujuan
                        </div>
                        <div class="col-sm-9">
                            : &emsp; {bank}
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-3">
                            Keperluan Layanan
                        </div>
                        <div class="col-sm-9">
                            : &emsp; {keperluan}
                        </div>
                    </div>
                </div> 
                <div>
                    <p class="m-0">Nomor antrian akan dilayani pada tanggal:</p>
                    <p class="m-0"><b>{date}</b>, pukul <b>{timeStart} - {timeEnd} WIB</b></p>
                    <p class="m-0">Untuk mempercepat transaksi, silahkan kunjungi <a href="">e-form</a></p>
                    <p class="text-danger mb-5">*Harap mendatangi kantor sebelum waktu pelayanan</p>
                </div>
                <button type="button" class="btn btn-primary btn-md float-end mb-5">Layanan Selesai</button>
            </div>
        </div>
    )
}

export default Beranda;
