import style from '../styles/Layout.module.css';

let Layout = () => {
  return(
    <>
      <div className={style.d_flex}>
        <div className={style.container_left}>
          <div className={style.logo}></div>
          <div className={style.menu_list}></div>
        </div>
        <div className={style.container_right}>
          <div className={style.navar_bar}></div>
          <div className={style.container}></div>
        </div>
      </div>
    </>
  );
}

export default Layout;