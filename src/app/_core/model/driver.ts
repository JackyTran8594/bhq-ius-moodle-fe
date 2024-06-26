import { BaseEntity } from "./base";

/* eslint-disable @typescript-eslint/ban-types */
export interface Driver {
  pagingData: pagingData;
}

export interface pagingData {
  content: [driverContent];
  pageable: pageable;
  totalElements: number;
  totalPages?: number;
  size?: number;
}

export class driverContent extends BaseEntity {
  id: number;
  uuid: string;
  soTT: string;
  maDK: string;
  hoTenDem: string;
  ten: string;
  hoVaTen: string;
  ngaySinh: string;
  maQuocTich: string;
  tenQuocTich: string;
  noiTT: string;
  noiTTMaDvhc: string;
  noiTTMaDvql: string;
  noiCT: string;
  noiCTMaDvhc: string;
  noiCTMaDvql: string;
  soCMT: string;
  ngayCapCMT: Date;
  noiCaPCMT: string;
  gioiTinh: string;
  hoVaTenIn: string;
  soCMTCu: string;
  isChecked: Boolean;

  constructor() {
    super();
    this.id = 0;
    this.uuid = '';
    this.soTT = '';
    this.maDK = '';
    this.hoTenDem = '';
    this.ten = '';
    this.hoVaTen = '';
    this.ngaySinh = '';
    this.maQuocTich = '';
    this.tenQuocTich = '';
    this.noiTT = '';
    this.noiTTMaDvhc = '';
    this.noiTTMaDvql = '';
    this.noiCT = '';
    this.noiCTMaDvhc = '';
    this.noiCTMaDvql = '';
    this.soCMT = '';
    this.ngayCapCMT = new Date();
    this.noiCaPCMT = '';
    this.gioiTinh = '';
    this.hoVaTenIn = '';
    this.soCMTCu = '';
    this.isChecked = false;
  }
}

export interface pageable {
  pageNumber: number;
  pageSize: number;
}
