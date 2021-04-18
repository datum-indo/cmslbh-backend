import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutTransferInput } from "../inputs/RenamedcaseCreateOrConnectWithoutTransferInput";
import { RenamedcaseCreateWithoutTransferInput } from "../inputs/RenamedcaseCreateWithoutTransferInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutTransferInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutTransferInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutTransferInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutTransferInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutTransferInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
