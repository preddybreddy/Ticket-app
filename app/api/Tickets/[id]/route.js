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
