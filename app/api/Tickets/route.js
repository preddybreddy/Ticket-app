import Ticket from "../../(model)/model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const formData = data.formData;
  try {
    await Ticket.create(formData);
    return NextResponse.json({ message: "Ticket created!" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error in creating ticket", err },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allTickets = await Ticket.find({});
    return NextResponse.json({ allTickets }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error in api retriving tickets" },
      { status: 500 }
    );
  }
}
