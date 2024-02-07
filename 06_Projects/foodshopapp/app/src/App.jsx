import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";
// import Button from "./components/Button";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const result = await response.json();

        setData(result);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };

    fetchFoodData();
  }, []);

  // console.log(data);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading</div>;

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/images/logo.svg" alt="img" />
        </div>
        <div className="search">
          <input placeholder="Search" />
        </div>
      </TopContainer>

      <FilterContainer>
        {filterBtns.map((value) => (
          <Button>{value.name}</Button>
        ))}
      </FilterContainer>

      <SearchResult data={data} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 39px;
`;

export const Button = styled.section`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
`;
