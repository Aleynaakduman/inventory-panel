
const DashboardContent = () => {
  return (
    <div>
        <div className="dashboard-cards">
            <div className="card">
                <div className="card-content1">
                    <p>Toplam Ürün</p>
                    <p>128</p>
                    <p>Tüm ürün sayısı</p>
                </div>
            </div>

            <div className="card">
                <div className="card-content2">
                          <p>Kritik Stok</p>
                    <p>18</p>
                    <p>Kritik stokta olan ürünler</p>
                </div>
            </div>


            <div className="card">
                <div className="card-content3">
                      <p>Tükenenler</p>
                    <p>7</p>
                    <p>Stokta tükenen ürünler </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DashboardContent