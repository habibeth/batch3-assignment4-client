import { useGetAllProductsQuery } from "../../../redux/feature/Admin/productManagement.api";
import ProductCard from "../../Shared/FeatureCard/FeatureCard";
import { TProduct } from "../../../types/productManagement";
import { Row } from "antd";

const FeatureProduct = () => {
    const { data: productsData, isLoading, isFetching } = useGetAllProductsQuery(undefined);
    if (isLoading === true) {
        return <p>Loading!!!</p>
    }
    if (isFetching) {
        return <p>Loading!!!</p>
    }
    return (
        <div style={{ marginTop: "100px" }}>
            <h2 style={{ textAlign: 'center', fontSize: '24px' }}>Featured Products</h2>
            <div style={{ overflow: 'hidden' }}>
                <Row gutter={16} style={{ padding: "50px" }}>
                    {
                        productsData?.data?.slice(0, 6).map((product: TProduct) => <ProductCard key={product._id} product={product} />)
                    }
                </Row>
            </div>

        </div>
    );
};

export default FeatureProduct;