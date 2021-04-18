import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutLogRequestsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutLogRequestsInput";
import { RenamedcaseCreateWithoutLogRequestsInput } from "../inputs/RenamedcaseCreateWithoutLogRequestsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutLogRequestsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutLogRequestsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutLogRequestsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutLogRequestsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutLogRequestsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
