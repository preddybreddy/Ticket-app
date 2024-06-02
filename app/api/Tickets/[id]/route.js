import Ticket from "@/app/(model)/model";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await Ticket.findByIdAndDelete(params.id);
    return NextResponse.json(
      { message: `Ticket with id ${params.id} deleted` },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: `Error in deleting ticket ${params.id}`, err },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  try {
    const ticket = await Ticket.findById(params.id);
    return NextResponse.json({ ticket }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: `Error in retreiving ticket ${params.id}` },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { formData } = await req.json();
    await Ticket.findByIdAndUpdate(params.id, formData);
    return NextResponse.json(
      { message: `Updated ticket with id ${params.id}` },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: `Error in updating ticket with id ${params.id}` },
      { status: 500 }
    );
  }
}
