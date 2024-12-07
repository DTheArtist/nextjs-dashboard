// import { db } from "@vercel/postgres";

// const client = await db.connect();

// async function listInvoices() {
// 	const data = await client.sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;

// 	return data.rows;
// }

export async function GET() {
	return Response.json({
		message:
			"File saved for answer reminder. Plus this might be handy as a database query tool.",
	});
	// try {
	// 	return Response.json(await listInvoices());
	// } catch (error) {
	// 	return Response.json({ error }, { status: 500 });
	// }
}
