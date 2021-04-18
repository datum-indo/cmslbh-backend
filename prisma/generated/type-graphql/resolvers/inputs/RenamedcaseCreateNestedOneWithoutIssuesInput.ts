import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutIssuesInput } from "../inputs/RenamedcaseCreateOrConnectWithoutIssuesInput";
import { RenamedcaseCreateWithoutIssuesInput } from "../inputs/RenamedcaseCreateWithoutIssuesInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
