import config from '~/config';
import TrangChu from '~/pages/TrangChu';
import QuanLyVe from '~/pages/QuanLyVe';
import DoiSoatVe from '~/pages/DoiSoatVe';
import DanhSachSuKien from '~/pages/DanhSachSuKien';
import QuanLyThietBi from '~/pages/QuanLyThietBi';
import CaiDat from '~/pages/CaiDat';
import GoiDichVu from '~/pages/GoiDichVu';
// Public
const publicRoutes = [
    { path: config.routes.home, component: TrangChu },
    { path: config.routes.quanlyve, component: QuanLyVe },
    { path: config.routes.doisoatve, component: DoiSoatVe },
    { path: config.routes.danhsachsukien, component: DanhSachSuKien },
    { path: config.routes.quanlythietbi, component: QuanLyThietBi },
    { path: config.routes.caidat, component: CaiDat },
    { path: config.routes.goidichvu, component: GoiDichVu },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
