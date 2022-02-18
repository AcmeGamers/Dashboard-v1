import Head from "next/head";
import Card_25 from "../components/cards/card_25";
import Card_75 from "../components/cards/card_75";
import CustomerOrderTable from "../components/table/customer_order_table";

export default function Orders() {
  function searchName() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("TableCell");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>

      {/* <!-- Body Content --> */}
      <div id="body-content" className="row">
        <Card_25 isActive="orders" />
        <Card_75
          title="Orders"
          extraData={
            <input
              type="text"
              id="myInput"
              onKeyUp={searchName}
              placeholder="Search for Customer Name"
            />
          }
        >
          <CustomerOrderTable />
        </Card_75>
      </div>
    </>
  );
}
