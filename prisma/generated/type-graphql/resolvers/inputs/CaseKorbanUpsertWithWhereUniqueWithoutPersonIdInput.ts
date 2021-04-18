import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseKorbanCreateWithoutPersonIdInput } from "../inputs/CaseKorbanCreateWithoutPersonIdInput";
import { CaseKorbanUpdateWithoutPersonIdInput } from "../inputs/CaseKorbanUpdateWithoutPersonIdInput";
import { CaseKorbanWhereUniqueInput } from "../inputs/CaseKorbanWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanUpsertWithWhereUniqueWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => CaseKorbanWhereUniqueInput, {
    nullable: false
  })
  where!: CaseKorbanWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseKorbanUpdateWithoutPersonIdInput, {
    nullable: false
  })
  update!: CaseKorbanUpdateWithoutPersonIdInput;

  @TypeGraphQL.Field(_type => CaseKorbanCreateWithoutPersonIdInput, {
    nullable: false
  })
  create!: CaseKorbanCreateWithoutPersonIdInput;
}
