import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css';

export const BookAntrian = () => {
    return (
        <div>
            <br/><br/><div>Book antrian untuk besok (Jumat, 9 Juli 2021)</div><br/>
            <form>
                <div class="row mb-3">
                    <label class="col-sm-3 col-form-label">Bank Tujuan</label>
                    <div class="col-sm-8">
                        <select class="form-select" aria-label="Default select example">
                            <option selected disabled>-Pilih Unit Kerja / Kantor Cabang-</option>
                            <option value="1">Bank KCP Soreang</option>
                            <option value="2">Bank KCP Banjaran</option>
                            <option value="3">Bank KCP Kamasan</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-3 col-form-label">Keperluan Layanan</label>
                    <div class="col-sm-8">
                        <select class="form-select" aria-label="Default select example">
                            <option selected disabled>-Pilih Layanan-</option>
                            <option value="1">Pendaftaran (dilayani oleh Customer Services)</option>
                            <option value="2">Transaksi (dilayani oleh Teller)</option>
                            <option value="3">Pinjaman (dilayani oleh Petugas Credit)</option>
                        </select>
                    </div>
                </div><br/><br/>

                <div class="col-sm-11">
                    <button type="submit" class="btn btn-outline-success">Dapatkan Nomor Antrian <i class="bi bi-chevron-right"></i></button>
                </div>
            </form>
        </div>
    )
}
