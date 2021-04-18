import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePelakuUpdateWithoutCaseIdInput } from "../inputs/CasePelakuUpdateWithoutCaseIdInput";
import { CasePelakuWhereUniqueInput } from "../inputs/CasePelakuWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuUpdateWithWhereUniqueWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CasePelakuWhereUniqueInput, {
    nullable: false
  })
  where!: CasePelakuWhereUniqueInput;

  @TypeGraphQL.Field(_type => CasePelakuUpdateWithoutCaseIdInput, {
    nullable: false
  })
  data!: CasePelakuUpdateWithoutCaseIdInput;
}
