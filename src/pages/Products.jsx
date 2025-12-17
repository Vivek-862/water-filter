import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';

// 20 Latest Kent & Aquaguard Models
// const productsData = [
//   { id: 1, brand: 'Kent', model: 'Grand Star', tech: 'RO + UV + UF + TDS Control + UV in Tank', capacity: '9 L', price: '₹21,500', features: 'Digital display, Zero water wastage, Mineral RO™', description: 'Premium smart RO with real-time purity monitoring and zero wastage technology.', image: 'https://m.media-amazon.com/images/I/71v1z-Hdy4L._SL1500_.jpg' },
//   { id: 2, brand: 'Kent', model: 'Grand Plus', tech: 'RO + UV + UF + TDS Control', capacity: '8 L', price: '₹18,000', features: 'Retains minerals, Multiple purification', description: 'Best-selling model with TDS controller for perfect mineral balance.', image: 'https://waterhouseproductsltd.com/wp/wp-content/uploads/2018/06/kent-grand-plus-larg05042019.png' },
//   { id: 3, brand: 'Kent', model: 'Supreme Extra', tech: 'RO + UV + UF + TDS + Alkaline', capacity: '8 L', price: '₹19,500', features: 'Alkaline water, High recovery', description: 'Advanced alkaline enhancer for better health and taste.', image: 'https://www.kentrosystems.com/images/water-purifiers/ro/360/kent-supreme-extra/9.png' },
//   { id: 4, brand: 'Kent', model: 'Ace', tech: 'RO + UV + UF + TDS Control', capacity: '8 L', price: '₹15,999', features: 'Compact, Mineral retention', description: 'Stylish wall-mountable purifier for modern homes.', image: 'https://www.kentrosystems.com/images/ro/kent-ace-alkaline.png' },
//   { id: 5, brand: 'Kent', model: 'Pearl', tech: 'RO + UV + UF', capacity: '8 L', price: '₹18,500', features: 'Detachable tank, Glass design', description: 'Elegant transparent tank for easy cleaning.', image: 'https://m.media-amazon.com/images/I/71+1z+Hdy4L._SL1500_.jpg' },
//   { id: 6, brand: 'Kent', model: 'Prime Plus', tech: 'RO + UV + TDS', capacity: '9 L', price: '₹19,000', features: 'Smart alerts, Digital display', description: 'Modern purifier with purity monitoring.', image: 'https://electronicparadise.in/cdn/shop/files/kent-prime-plus.jpg' },
//   { id: 7, brand: 'Kent', model: 'Wonder', tech: 'RO + UV + UF + Copper', capacity: '7 L', price: '₹17,999', features: 'Active copper infusion', description: 'Adds beneficial copper for immunity boost.', image: 'https://www.kentrosystems.com/images/ro/kent-wonder.png' },
//   { id: 8, brand: 'Kent', model: 'Pride Plus', tech: 'RO + UV + UF', capacity: '8 L', price: '₹16,500', features: 'Budget premium features', description: 'Affordable high-performance RO.', image: 'https://www.kentrosystems.com/images/ro/kent-pride-plus.png' },
//   { id: 9, brand: 'Kent', model: 'Sapphire', tech: 'RO + Alkaline', capacity: '8 L', price: '₹25,000', features: 'pH 8+ alkaline water', description: 'Antioxidant-rich alkaline water.', image: 'https://m.media-amazon.com/images/I/61v1z-Hdy4L._SL1200_.jpg' },
//   { id: 10, brand: 'Kent', model: 'Elite Plus', tech: 'High Capacity RO', capacity: '20 L/hr', price: '₹30,000', features: 'Commercial grade', description: 'Ideal for offices and large families.', image: 'https://www.kentrosystems.com/images/ro/kent-elite-plus.png' },

//   { id: 11, brand: 'Aquaguard', model: 'Sure Delight 2X', tech: 'RO + UV + UF + Minerals', capacity: '6 L', price: '₹12,499', features: '2X filter life, 60% savings', description: 'Most popular with Aquasaver technology.', image: 'https://m.media-amazon.com/images/I/51GZazAZ-5L.jpg' },
//   { id: 12, brand: 'Aquaguard', model: 'Aura 2X Life', tech: 'RO + UV + MTDS + Active Copper', capacity: '7 L', price: '₹18,999', features: 'Taste adjuster, Copper boost', description: 'Customizable taste with health boosters.', image: 'https://www.eurekaforbes.com/cms/assets/prod/1_A_Aura_2_X_life_Mobile_76220606b5.jpg' },
//   { id: 13, brand: 'Aquaguard', model: 'Glory', tech: 'RO + UV + UF + Active Copper', capacity: '6 L', price: '₹13,699', features: '5-year free service', description: 'Long-term service plan included.', image: 'https://m.media-amazon.com/images/I/51SvOqes7-L.jpg' },
//   { id: 14, brand: 'Aquaguard', model: 'Marvel 2X', tech: 'RO + UV + UF + Copper', capacity: '8 L', price: '₹15,999', features: 'Mega filter, 2X life', description: 'Advanced multi-stage with copper.', image: 'https://www.eurekaforbes.com/cms/assets/prod/A_1_edc8fc637a.jpg' },
//   { id: 15, brand: 'Aquaguard', model: 'Blaze Slim Hot', tech: 'RO + UV + Hot Water', capacity: '7 L', price: '₹25,000', features: 'Instant hot water', description: 'Slim design with hot & ambient options.', image: 'https://m.media-amazon.com/images/I/61GZazAZ-5L._SL1500_.jpg' },
//   { id: 16, brand: 'Aquaguard', model: 'Delight NXT', tech: 'RO + UV + UF + MC', capacity: '6 L', price: '₹14,500', features: 'High recovery, 9 stages', description: 'Efficient for all water sources.', image: 'https://www.eurekaforbes.com/cms/assets/prod/delight-nxt.jpg' },
//   { id: 17, brand: 'Aquaguard', model: 'Enhance Ritz Pro', tech: 'RO + UV + Stainless Steel + IoT', capacity: '7 L', price: '₹22,000', features: 'Smart IoT, SS tank', description: 'Premium connected purifier.', image: 'https://m.media-amazon.com/images/I/71GZazAZ-5L._SL1500_.jpg' },
//   { id: 18, brand: 'Aquaguard', model: 'Aspire Spark', tech: 'RO + UV + Hot & Ambient', capacity: '7 L', price: '₹19,999', features: 'Dual temperature', description: 'Hot water on demand with child lock.', image: 'https://m.media-amazon.com/images/I/51GZazAZ-5L.jpg' },
//   { id: 19, brand: 'Aquaguard', model: 'Enrich Jazz', tech: 'RO + UV + SS + IoT', capacity: '5 L', price: '₹22,499', features: 'Stainless steel smart', description: 'Durable and connected.', image: 'https://m.media-amazon.com/images/I/61SvOqes7-L.jpg' },
//   { id: 20, brand: 'Aquaguard', model: 'Sure Marvel', tech: 'RO + UV + Taste Adjuster', capacity: '6 L', price: '₹16,999', features: 'Custom taste, Compact', description: 'Perfect balance of purity and taste.', image: 'https://m.media-amazon.com/images/I/51GZazAZ-5L._SL1200_.jpg' },
// ];

const productsData = [
  {
    id: 1,
    brand: "Pureit",
    model: "Grand Star",
    tech: "RO + UV + UF + TDS Control + UV in Tank",
    capacity: "9 L",
    price: "₹21,500",
    features: "Digital display, Zero water wastage, Mineral RO™",
    description: "Premium smart RO with real-time purity monitoring and zero wastage technology.",
    image: "https://m.media-amazon.com/images/I/71v1z-Hdy4L._SL1500_.jpg"
  },
  {
    id: 2,
    brand: "Havells",
    model: "Grand Plus",
    tech: "RO + UV + UF + TDS Control",
    capacity: "8 L",
    price: "₹18,000",
    features: "Retains minerals, Multiple purification",
    description: "Best-selling model with TDS controller for perfect mineral balance.",
    image: "https://waterhouseproductsltd.com/wp/wp-content/uploads/2018/06/kent-grand-plus-larg05042019.png"
  },
  {
    id: 3,
    brand: "Pureit",
    model: "Supreme Extra",
    tech: "RO + UV + UF + TDS + Alkaline",
    capacity: "8 L",
    price: "₹19,500",
    features: "Alkaline water, High recovery",
    description: "Advanced alkaline enhancer for better health and taste.",
    image: "https://www.kentrosystems.com/images/water-purifiers/ro/360/kent-supreme-extra/9.png"
  },
  {
    id: 4,
    brand: "Aquaguard",
    model: "Ace",
    tech: "RO + UV + UF + TDS Control",
    capacity: "8 L",
    price: "₹15,999",
    features: "Compact, Mineral retention",
    description: "Stylish wall-mountable purifier for modern homes.",
    image: "https://www.kentrosystems.com/images/ro/kent-ace-alkaline.png"
  },
  {
    id: 5,
    brand: "Kent",
    model: "Pearl",
    tech: "RO + UV + UF",
    capacity: "8 L",
    price: "₹18,500",
    features: "Detachable tank, Glass design",
    description: "Elegant transparent tank for easy cleaning.",
    image: "https://m.media-amazon.com/images/I/71+1z+Hdy4L._SL1500_.jpg"
  },
  {
    id: 6,
    brand: "Pureit",
    model: "Prime Plus",
    tech: "RO + UV + TDS",
    capacity: "9 L",
    price: "₹19,000",
    features: "Smart alerts, Digital display",
    description: "Modern purifier with purity monitoring.",
    image: "https://electronicparadise.in/cdn/shop/files/kent-prime-plus.jpg"
  },
  {
    id: 7,
    brand: "AO Smith",
    model: "Wonder",
    tech: "RO + UV + UF + Copper",
    capacity: "7 L",
    price: "₹17,999",
    features: "Active copper infusion",
    description: "Adds beneficial copper for immunity boost.",
    image: "https://www.kentrosystems.com/images/ro/kent-wonder.png"
  },
  {
    id: 8,
    brand: "Havells",
    model: "Pride Plus",
    tech: "RO + UV + UF",
    capacity: "8 L",
    price: "₹16,500",
    features: "Budget premium features",
    description: "Affordable high-performance RO.",
    image: "https://www.kentrosystems.com/images/ro/kent-pride-plus.png"
  },
  {
    id: 9,
    brand: "Eureka Forbes",
    model: "Sapphire",
    tech: "RO + Alkaline",
    capacity: "8 L",
    price: "₹25,000",
    features: "pH 8+ alkaline water",
    description: "Antioxidant-rich alkaline water.",
    image: "https://m.media-amazon.com/images/I/61v1z-Hdy4L._SL1200_.jpg"
  },
  {
    id: 10,
    brand: "Kent",
    model: "Elite Plus",
    tech: "High Capacity RO",
    capacity: "20 L/hr",
    price: "₹30,000",
    features: "Commercial grade",
    description: "Ideal for offices and large families.",
    image: "https://www.kentrosystems.com/images/ro/kent-elite-plus.png"
  },
  {
    id: 11,
    brand: "Pureit",
    model: "Sure Delight 2X",
    tech: "RO + UV + UF + Minerals",
    capacity: "6 L",
    price: "₹12,499",
    features: "2X filter life, 60% savings",
    description: "Most popular with Aquasaver technology.",
    image: "https://m.media-amazon.com/images/I/51GZazAZ-5L.jpg"
  },
  {
    id: 12,
    brand: "Blue Star",
    model: "Aura 2X Life",
    tech: "RO + UV + MTDS + Active Copper",
    capacity: "7 L",
    price: "₹18,999",
    features: "Taste adjuster, Copper boost",
    description: "Customizable taste with health boosters.",
    image: "https://www.eurekaforbes.com/cms/assets/prod/1_A_Aura_2_X_life_Mobile_76220606b5.jpg"
  },
  {
    id: 13,
    brand: "AO Smith",
    model: "Glory",
    tech: "RO + UV + UF + Active Copper",
    capacity: "6 L",
    price: "₹13,699",
    features: "5-year free service",
    description: "Long-term service plan included.",
    image: "https://m.media-amazon.com/images/I/51SvOqes7-L.jpg"
  },
  {
    id: 14,
    brand: "Havells",
    model: "Marvel 2X",
    tech: "RO + UV + UF + Copper",
    capacity: "8 L",
    price: "₹15,999",
    features: "Mega filter, 2X life",
    description: "Advanced multi-stage with copper.",
    image: "https://www.eurekaforbes.com/cms/assets/prod/A_1_edc8fc637a.jpg"
  },
  {
    id: 15,
    brand: "Blue Star",
    model: "Blaze Slim Hot",
    tech: "RO + UV + Hot Water",
    capacity: "7 L",
    price: "₹25,000",
    features: "Instant hot water",
    description: "Slim design with hot & ambient options.",
    image: "https://m.media-amazon.com/images/I/61GZazAZ-5L._SL1500_.jpg"
  },
  {
    id: 16,
    brand: "Blue Star",
    model: "Delight NXT",
    tech: "RO + UV + UF + MC",
    capacity: "6 L",
    price: "₹14,500",
    features: "High recovery, 9 stages",
    description: "Efficient for all water sources.",
    image: "https://www.eurekaforbes.com/cms/assets/prod/delight-nxt.jpg"
  },
  {
    id: 17,
    brand: "AO Smith",
    model: "Enhance Ritz Pro",
    tech: "RO + UV + Stainless Steel + IoT",
    capacity: "7 L",
    price: "₹22,000",
    features: "Smart IoT, SS tank",
    description: "Premium connected purifier.",
    image: "https://m.media-amazon.com/images/I/71GZazAZ-5L._SL1500_.jpg"
  },
  {
    id: 18,
    brand: "Blue Star",
    model: "Aspire Spark",
    tech: "RO + UV + Hot & Ambient",
    capacity: "7 L",
    price: "₹19,999",
    features: "Dual temperature",
    description: "Hot water on demand with child lock.",
    image: "https://m.media-amazon.com/images/I/51GZazAZ-5L.jpg"
  },
  {
    id: 19,
    brand: "Kent",
    model: "Enrich Jazz",
    tech: "RO + UV + SS + IoT",
    capacity: "5 L",
    price: "₹22,499",
    features: "Stainless steel smart",
    description: "Durable and connected.",
    image: "https://m.media-amazon.com/images/I/61SvOqes7-L.jpg"
  },
  {
    id: 20,
    brand: "Kent",
    model: "Sure Marvel",
    tech: "RO + UV + Taste Adjuster",
    capacity: "6 L",
    price: "₹16,999",
    features: "Custom taste, Compact",
    description: "Perfect balance of purity and taste.",
    image: "https://m.media-amazon.com/images/I/51GZazAZ-5L._SL1200_.jpg"
  }
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('brand', { header: 'Brand', cell: info => <span className="font-bold text-blue-700">{info.getValue()}</span> }),
  columnHelper.accessor('model', { header: 'Model', cell: info => <span className="font-medium">{info.getValue()}</span> }),
  columnHelper.accessor('tech', { header: 'Technology' }),
  columnHelper.accessor('capacity', { header: 'Storage' }),
  columnHelper.accessor('price', { header: 'Price', cell: info => <span className="font-bold text-green-600">{info.getValue()}</span> }),
];

const Products = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const table = useReactTable({
    data: productsData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-800 text-center mb-4 flex items-center justify-center gap-4">
          Our Premium Water Purifiers
          <span className="text-6xl animate-pulse">💧</span>
        </h1>
        <p className="text-center text-xl text-blue-700 mb-12">Latest Kent & Aquaguard models for pure, healthy drinking water</p>

        {/* Search Bar */}
        <div className="mb-10 max-w-lg mx-auto">
          <input
            type="text"
            value={globalFilter ?? ''}
            onChange={e => setGlobalFilter(e.target.value)}
            placeholder="Search by brand, model, technology..."
            className="w-full p-4 text-lg border-2 border-blue-300 rounded-xl focus:outline-none focus:border-blue-600 shadow-lg"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th
                        key={header.id}
                        className="p-6 text-left font-semibold cursor-pointer hover:bg-blue-800 transition"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getIsSorted() ? (header.column.getIsSorted() === 'asc' ? ' ↑' : ' ↓') : ''}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map(row => (
                  <tr
                    key={row.id}
                    className="border-b hover:bg-blue-50 cursor-pointer transition duration-200"
                    onClick={() => setSelectedProduct(row.original)}
                  >
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className="p-6">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-gray-100 p-6 border-t-4 border-blue-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-lg font-medium text-gray-700">
                Page <span className="font-bold text-blue-600">{table.getState().pagination.pageIndex + 1}</span> of{' '}
                <span className="font-bold text-blue-600">{table.getPageCount()}</span> ({productsData.length} products)
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gray-700">Rows per page:</span>
                <select
                  value={table.getState().pagination.pageSize}
                  onChange={e => table.setPageSize(Number(e.target.value))}
                  className="p-2 border border-blue-400 rounded-lg"
                >
                  {[5, 10, 15, 20].map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3">
                <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400">First</button>
                <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400">Previous</button>
                <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400">Next</button>
                <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400">Last</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-10 relative" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-8 text-4xl text-red-600 hover:text-red-800"
            >
              ×
            </button>

            <h2 className="text-4xl font-bold text-blue-800 mb-6">
              {selectedProduct.brand} {selectedProduct.model}
            </h2>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.model}
              className="w-full h-96 object-contain rounded-2xl mb-8 shadow-xl bg-gray-50"
            />

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{selectedProduct.description}</p>
                <div className="bg-blue-50 p-8 rounded-2xl space-y-5 text-lg">
                  <p><strong>Technology:</strong> {selectedProduct.tech}</p>
                  <p><strong>Storage:</strong> {selectedProduct.capacity}</p>
                  <p><strong>Price:</strong> <span className="text-3xl font-bold text-blue-600">{selectedProduct.price}</span></p>
                  <p><strong>Features:</strong> {selectedProduct.features}</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-700">Pure Water for Healthy Life</p>
                  <p className="text-7xl mt-4 animate-pulse">💧</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold px-12 py-5 rounded-full shadow-2xl transform hover:scale-105 transition">
                  Get Quote / Book Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;