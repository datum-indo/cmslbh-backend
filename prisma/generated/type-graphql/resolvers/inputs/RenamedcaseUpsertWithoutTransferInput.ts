import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutTransferInput } from "../inputs/RenamedcaseCreateWithoutTransferInput";
import { RenamedcaseUpdateWithoutTransferInput } from "../inputs/RenamedcaseUpdateWithoutTransferInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutTransferInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutTransferInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutTransferInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutTransferInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutTransferInput;
}
