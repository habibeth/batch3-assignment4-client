import { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../redux/feature/Admin/productManagement.api";
import { Button, Col, Pagination, Row, Select } from "antd";
import ProductCard from "../Shared/ProductCard/ProductCard";
import { TProduct } from "../../types/productManagement";
import Search from "antd/es/input/Search";
import { Option } from "antd/es/mentions";

const Products = () => {
    const [page, setPage] = useState(1);
    const [priceOrder, setPriceOrder] = useState('')
    const { data: productsData, isLoading, isFetching } = useGetAllProductsQuery([
        { name: 'limit', value: 10 },
        { name: 'page', value: page },
        { name: 'sort', value: 'createdAt' },
        { name: 'priceOrder', value: priceOrder },
    ]);
    const metaData = productsData?.meta




    const [filteredData, setFilteredData] = useState<TProduct[] | undefined>(productsData?.data);
    useEffect(() => {
        setFilteredData(productsData?.data);
    }, [productsData?.data]);

    const onSearch = (value: string) => {
        const filtered = productsData?.data!.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };


    const handlePriceOrderChange = (value: 'asc' | 'desc' | '') => {
        setPriceOrder(value);
    };

    const resetSorting = () => {
        setPriceOrder('');
    };


    if (isLoading && isFetching) {
        return <div>Loading ....</div>
    }
    return (
        <div style={{ marginTop: "100px" }}>
            <h2 style={{ textAlign: 'center', fontSize: '24px' }}>Featured Products</h2>
            <div style={{ overflow: 'hidden' }}>
                <Row gutter={16} style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <Col span={24} md={12}>
                        <Search
                            placeholder="Search by name"
                            onSearch={onSearch}
                            style={{ marginBottom: 20 }}
                        />
                    </Col>
                </Row>
                <div style={{ marginTop: '20px', marginLeft: '50px' }}>
                    <span style={{ marginRight: 10 }}>Sort by Price:</span>
                    <Select
                        onChange={handlePriceOrderChange}
                        style={{ width: 200, marginRight: 10 }}
                    >
                        <Option value="asc">Price: Low to High</Option>
                        <Option value="desc">Price: High to Low</Option>
                    </Select>
                    <Button onClick={resetSorting}>Reset Sorting</Button>
                </div>
                <Row gutter={16} style={{ padding: "50px" }}>
                    {
                        Array.isArray(productsData?.data) && filteredData?.map((product: TProduct) => <ProductCard key={product._id} product={product} />)
                    }
                </Row>
                <Pagination
                    style={{ marginRight: "100px", marginBottom: "50px" }}
                    align="end"
                    current={page}
                    onChange={(value) => setPage(value)}
                    pageSize={metaData?.limit}
                    total={metaData?.total}
                />
            </div>

        </div>
    );
};

export default Products;