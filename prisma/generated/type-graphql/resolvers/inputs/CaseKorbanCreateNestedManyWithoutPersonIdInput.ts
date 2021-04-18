import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseKorbanCreateOrConnectWithoutPersonIdInput } from "../inputs/CaseKorbanCreateOrConnectWithoutPersonIdInput";
import { CaseKorbanCreateWithoutPersonIdInput } from "../inputs/CaseKorbanCreateWithoutPersonIdInput";
import { CaseKorbanWhereUniqueInput } from "../inputs/CaseKorbanWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanCreateNestedManyWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => [CaseKorbanCreateWithoutPersonIdInput], {
    nullable: true
  })
  create?: CaseKorbanCreateWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanCreateOrConnectWithoutPersonIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseKorbanCreateOrConnectWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseKorbanWhereUniqueInput[] | undefined;
}
