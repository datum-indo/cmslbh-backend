import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePelakuUpdateWithoutPersonIdInput } from "../inputs/CasePelakuUpdateWithoutPersonIdInput";
import { CasePelakuWhereUniqueInput } from "../inputs/CasePelakuWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuUpdateWithWhereUniqueWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => CasePelakuWhereUniqueInput, {
    nullable: false
  })
  where!: CasePelakuWhereUniqueInput;

  @TypeGraphQL.Field(_type => CasePelakuUpdateWithoutPersonIdInput, {
    nullable: false
  })
  data!: CasePelakuUpdateWithoutPersonIdInput;
}
