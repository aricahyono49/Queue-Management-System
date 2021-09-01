import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css';

export const DaftarListBank = () => {
    return (
        <div>
            <br></br><h2>Daftar Bank</h2>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-white"><i class="bi bi-search"></i></span>
                </div>
                <input type="search" class="form-control light-table-filter" data-table="table-striped table-hover table-bordered" placeholder="search..."/>
            </div>
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Bank</th>
                    <th scope="col">Alamat</th>
                    <th scope="col"><center>Lihat Detail Antrian</center></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Bank KCP Soreang</td>
                        <td>Jl. Soreang 181 Bandung</td>
                        <td><a href="#"><center>Lihat Detail</center></a></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Bank KCP Banjaran</td>
                        <td>Jl. Banjaran 150 Bandung</td>
                        <td><a href="#"><center>Lihat Detail</center></a></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Bank KCP Kamasan</td>
                        <td>Jl. Kamasan 78 Bandung</td>
                        <td><a href="#"><center>Lihat Detail</center></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
