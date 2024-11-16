// productData.js

const products = [{
        id: 1,
        name: "Thiệp cưới tone trắng",
        price: 6000,
        image: "../img/logo\ trang\ web.jpg",
        gioiTinh: "Nữ",
        mauma: "Mẫu thiệp cưới tone trắng mang phong cách tối giản",
        phongcach: "Thiệp cưới tone trắng mang phong cách thanh lịch, tinh tế, là lựa chọn hoàn hảo cho những cặp đôi yêu thích sự đơn giản và sang trọng. Với sắc trắng chủ đạo và hoa văn tinh xảo, mỗi tấm thiệp như một lời mời trang nhã, gửi gắm thông điệp tình yêu thuần khiết và bền vững trong ngày trọng đại của bạn."


    },
    {
        id: 2,
        name: "Thiệp cưới hoa in hoa TuLip",
        price: 7000,
        image: "../img/thiep-cuoi-hoa-tulip.png",
        gioiTinh: "Nữ",
        mauma: "Mẫu thiệp cưới hoa thiên điểu nổi bật với họa tiết hoa độc đáo, tượng trưng cho sự tự do và sức sống mạnh mẽ. Thiết kế tinh tế trên nền giấy cao cấp, kết hợp gam màu xanh, cam, tím hài hòa, mang lại vẻ đẹp hiện đại và cuốn hút, lý tưởng cho các cặp đôi yêu thích sự mới mẻ.",
        phongcach: "Thiệp cưới in hoa thiên điểu mang phong cách hiện đại và tươi mới, với họa tiết hoa sắc nét, sống động, biểu tượng của tự do và sức sống. Thiết kế trang nhã, phù hợp cho các cặp đôi yêu thích thiên nhiên và sự khác biệt."
    },
    {
        id: 3,
        name: "Thiệp cưới phong cách truyền  thống",
        price: 6500,
        image: "../img/thiep-cuoi-phong-các-truyen-thong.png",
        gioiTinh: "Nữ",
        mauma: " ",
        phongcach: "Mẫu thiệp cưới truyền thống thường mang màu sắc đỏ hoặc vàng, biểu tượng của sự may mắn và phú quý. Thiết kế tinh tế với hoa văn truyền thống như họa tiết long phụng, hoa sen hoặc đường diềm cổ điển, thiệp cưới này mang lại cảm giác trang trọng và ý nghĩa sâu sắc, phù hợp với các nghi lễ cưới hỏi truyền thống."
    },
    {
        id: 4,
        name: "Thiệp cưới tone hồng trắng",
        price: 8000,
        image: "../img/thiep-cuoi-tone-hong.png",
        gioiTinh: "Nữ",
        mauma: " ",
        phongcach: "Thiệp cưới tone hồng mang phong cách lãng mạn, nhẹ nhàng với các sắc hồng từ pastel đến hồng đậm, biểu tượng cho tình yêu ngọt ngào. Thiết kế thường kết hợp hoa văn hoa lá mềm mại hoặc các chi tiết ánh kim để tạo điểm nhấn, phù hợp với các cặp đôi yêu thích phong cách tinh tế và mơ mộng."
    },
    {
        id: 5,
        name: "Thiệp cưới thời bao cấp",
        price: 9000,
        image: "../img/thiep-cuoi-co-dien.png",
        gioiTinh: "Nữ",
        mauma: " ",
        phongcach: "Thiệp cưới phong cách thời bao cấp gợi nhớ về thập niên cũ với gam màu đỏ, xanh, vàng đậm và hình ảnh, phông chữ kiểu cổ điển. Thiết kế tối giản, mộc mạc với phong cách in ấn thời xưa, mang đến sự hoài niệm, độc đáo và vui nhộn, phù hợp với những cặp đôi muốn tìm về nét đẹp xưa cũ. "
    },
    {
        id: 6,
        name: "Thiệp cưới phong cách vintage",
        price: 6000,
        image: "../img/thiep-cuoi-hien-dai.png",
        gioiTinh: "Nữ",
        mauma: "",
        phongcach: "Thiệp cưới vintage có thiết kế cổ điển, thanh lịch, với gam màu trầm ấm như nâu, beige, kem hoặc xanh lá nhạt. Mẫu thiệp này thường đi kèm họa tiết ren, hoa văn cổ, hoặc các họa tiết trang trí như khung ảnh, tem thư cũ, mang đến nét đẹp lãng mạn, phù hợp cho các cặp đôi yêu thích phong cách hoài cổ và sang trọng"
    },
    {
        id: 7,
        name: "Thiệp cưới in hoa thiên điểu",
        price: 10000,
        image: "../img/thiep-cuoi-in-hoa-thien-dieu.png",
        gioiTinh: "Nữ",
        mauma: "",
        phongcach: "Thiệp cưới hoa thiên điểu mang phong cách hiện đại và tự do với họa tiết hoa thiên điểu rực rỡ, tượng trưng cho sức sống mạnh mẽ. Thiết kế trên nền giấy cao cấp, kết hợp các màu sắc như xanh lá, cam, tím tạo cảm giác sống động và tươi mới, phù hợp cho các cặp đôi yêu thiên nhiên."
    },
    {
        id: 8,
        name: "Thiệp cưới thiêt kế độc đáo",
        price: 15000,
        image: "../img/thiep-cuoi-doc-dao.png",
        gioiTinh: "Nữ",
        mauma: "",
        phongcach: "Thiệp cưới độc đáo thường có thiết kế phá cách với các chi tiết như hình cắt laser, trang trí 3D, hoặc chất liệu đặc biệt như giấy kraft, gỗ, hoặc acrylic. Mỗi mẫu đều mang phong cách riêng, thể hiện cá tính khác biệt của cặp đôi, tạo dấu ấn riêng cho ngày trọng đại."
    },
    {
        id: 4,
        name: "Thiệp sinh nhật có in hoa",
        price: 10000,
        image: "../img/thiep-sinh-nhat-in-hoa.png",
        gioiTinh: "Nam",
        mauma: "Độ lưu hương của Once Pherody được đánh giá là khá lâu, với khả năng duy trì mùi hương trên da tầm 6 đến 8 giờ. Nước hoa unisex này có thể tồn tại trên da lâu hơn khi được xịt lên quần áo hoặc trong điều kiện khí hậu mát mẻ.",
        phongcach: "Với sự kết hợp của hương trái cây tươi mát và hoa cỏ sang trọng, Once Pherody phù hợp cho những dịp đặc biệt, buổi hẹn hò, hoặc sự kiện đêm. Nó mang đến sự lôi cuốn và quyến rũ, thích hợp cho những ai muốn tạo ấn tượng mạnh mẽ và tự tin."
    },
    {
        id: 5,
        name: "Thiệp sinh nhật tone đen",
        price: 8000,
        image: "../img/thiep-sinh-nhat-tone-den.png",
        gioiTinh: "Nam",
        mauma: "",
        phongcach: "Thiệp sinh nhật tone đen mang vẻ đẹp cá tính, sang trọng với nền đen chủ đạo, thường được nhấn bằng chi tiết ánh kim hoặc các họa tiết nổi bật. Thiết kế này mang đến sự bí ẩn và độc đáo, phù hợp cho người thích phong cách thanh lịch, khác biệt."
    }, {
        id: 6,
        name: "Thiệp sinh nhật nhiều màu",
        price: 7000,
        image: "../img/thiep-sinh-nhat-nhieu-mau.png",
        gioiTinh: "Nam",
        mauma: "Độ độ t với khoảng cách gần.",
        phongcach: "Thiệp sinh nhật nhiều màu sắc rực rỡ và vui tươi với họa tiết đa dạng, tạo không khí vui nhộn và tràn đầy năng lượng. Thiết kế này phù hợp cho mọi lứa tuổi, đặc biệt là cho những bữa tiệc sinh nhật trẻ trung, sôi động."
    },
    {
        id: 7,
        name: "Thiệp sinh nhật phong cách cổ điển",
        price: 8000,
        image: "../img/thiep-sinh-nhat-phong-cach-co-dien.png",
        gioiTinh: "Nam",
        mauma: " ",
        phongcach: "Thiệp sinh nhật phong cách cổ điển mang gam màu trầm như nâu, xanh lục nhạt, hoặc beige, với các họa tiết hoài cổ như ren, tem thư hoặc khung ảnh. Thiết kế này mang lại vẻ đẹp sang trọng và thanh lịch, lý tưởng cho những ai yêu phong cách vintage."
    },
    {
        id: 8,
        name: "Thiệp sinh nhật tone trắng",
        price: 10000,
        image: "../img/thiep-sinh-nhat-tone-trang.png",
        gioiTinh: "Nam",
        mauma: "",
        phongcach: "Thiệp sinh nhật tone trắng mang đến cảm giác tinh khiết, thanh lịch với nền trắng chủ đạo, thường nhấn nhá bằng các chi tiết màu pastel hoặc ánh kim nhẹ. Phong cách này phù hợp cho mọi lứa tuổi, tạo nên sự trang nhã và nhẹ nhàng cho ngày sinh nhật."
    },
    {
        id: 9,
        name: "Thiệp sinh nhật cắt laser ",
        price: 13000,
        image: "../img/thiep-sinh-nhat-cat-laser-tinh-xao.png",
        gioiTinh: "Nam",
        mauma: "",
        phongcach: "Thiệp sinh nhật đơn giản có thiết kế tối giản với ít họa tiết, sử dụng các gam màu nhẹ nhàng và tinh tế. Kiểu thiệp này mang lại cảm giác trang nhã, không cầu kỳ, phù hợp cho những ai yêu thích phong cách tối giản và tinh tế."
    },
    {
        id: 10,
        name: "Thiệp sinh nhật in hoa khô",
        price: 15000,
        image: "../img/thiep-sinh-nhat-in-hoa-kho.png",
        gioiTinh: "Nam",
        mauma: " ",
        phongcach: "Thiệp sinh nhật in hoa khô mang phong cách tự nhiên, mộc mạc với các bông hoa khô ép vào thiệp, tạo nên nét đẹp nhẹ nhàng, tinh tế. Thiết kế này đem lại cảm giác gần gũi và hoài cổ, phù hợp cho những người yêu thích thiên nhiên và sự đơn giản."
    },
    {
        id: 11,
        name: "Thiệp sinh nhật đính hoa tươi",
        price: 17000,
        image: "../img/thiep-sinh-nhat-co-dinh-hoa-tuoi.png",
        gioiTinh: "Nam",
        mauma: "",
        phongcach: "Thiệp sinh nhật đính hoa tươi nổi bật và độc đáo với những bông hoa thật đính trên thiệp, mang đến cảm giác sống động và thơm ngát. Mỗi tấm thiệp đều là một tác phẩm tỉ mỉ, lý tưởng cho những ai muốn tạo bất ngờ đặc biệt."
    },

];