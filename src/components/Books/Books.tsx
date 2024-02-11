import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin, Table } from "antd";
import dayjs from "dayjs";
import ListSelect from "./ListSelect";
import CustomDatePicker from "./CustomDatePicker";
import Loader from "../Loader/Loader";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Book {
  title: string;
  author: string;
  amazon_product_url: string;
  price: string;
  book_image: string;
}

const columns = [
  {
    title: "SL",
    dataIndex: "sl",
    key: "sl",
    render: (text: string, record: any, index: number) => index + 1,
  },
  {
    title: "Image",
    dataIndex: "book_image",
    key: "book_image",
    render: (book_image: string) => (
      <img src={book_image} alt="book cover" style={{ maxWidth: "50px" }} />
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "Amazon Product URL",
    dataIndex: "amazon_product_url",
    key: "amazon_product_url",
    render: (amazon_product_url: string) => (
      <a href={amazon_product_url}>Buy Now</a>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
];

const BestSellerBooks: React.FC = () => {
  const [lists, setLists] = useState<
    { list_name: string; list_name_encoded: string }[]
  >([]);
  const [selectedList, setSelectedList] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<dayjs.ConfigType>(dayjs());
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [defaultList, setDefaultList] = useState<string>("");

  useEffect(() => {
    const fetchLists = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/books/v3/lists/names.json?api-key=${process.env.REACT_APP_API_KEY}`
        );
        const { results } = response.data;
        const listNames = results.map(
          ({ list_name, list_name_encoded }: any) => ({
            list_name,
            list_name_encoded,
          })
        );
        setDefaultList(listNames[0].list_name_encoded);
        setLists(listNames);
        setSelectedList(listNames[0].list_name_encoded);

        await fetchBooks(listNames[0].list_name_encoded);
      } catch (error: any) {
        console.error("Error fetching lists:", error);
        toast.error(error.response.statusText);
      } finally {
        setLoading(false);
      }
    };

    fetchLists();
  }, []);

  const fetchBooks = async (selectedList: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/books/v3/lists/${selectedDate}/${selectedList}.json?api-key=${process.env.REACT_APP_API_KEY}`
      );
      const { books } = response.data.results;
      setBooks(books);
    } catch (error: any) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleListChange = (value: string) => {
    setSelectedList(value);
  };

  const handleDateChange = (date: dayjs.ConfigType) => {
    setSelectedDate(date);
  };

  const paginationOptions = {
    pageSizeOptions: ["10", "20", "30", "40"],
    showSizeChanger: true,
    defaultPageSize: 10,
  };

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className="px-4 md:px-10 ">
      <Spin spinning={loading}>
        <div className=" flex justify-end flex-wrap  py-4 gap-4 items-center  ">
          <CustomDatePicker
            defaultValue={dayjs()}
            onChange={handleDateChange}
          />
          <ListSelect
            lists={lists}
            defaultValue={defaultList}
            onChange={handleListChange}
          />
          <button
            type="button"
            className="inline-flex  items-center gap-x-2 rounded-md hover:cursor-pointer bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => fetchBooks(selectedList)}
          >
            {`Fetch Books`}
          </button>
        </div>
        <Table
          columns={columns}
          dataSource={books}
          pagination={paginationOptions}
        />
      </Spin>
    </div>
  );
};

export default BestSellerBooks;
