import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePelakuCreateWithoutPersonIdInput } from "../inputs/CasePelakuCreateWithoutPersonIdInput";
import { CasePelakuUpdateWithoutPersonIdInput } from "../inputs/CasePelakuUpdateWithoutPersonIdInput";
import { CasePelakuWhereUniqueInput } from "../inputs/CasePelakuWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuUpsertWithWhereUniqueWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => CasePelakuWhereUniqueInput, {
    nullable: false
  })
  where!: CasePelakuWhereUniqueInput;

  @TypeGraphQL.Field(_type => CasePelakuUpdateWithoutPersonIdInput, {
    nullable: false
  })
  update!: CasePelakuUpdateWithoutPersonIdInput;

  @TypeGraphQL.Field(_type => CasePelakuCreateWithoutPersonIdInput, {
    nullable: false
  })
  create!: CasePelakuCreateWithoutPersonIdInput;
}
