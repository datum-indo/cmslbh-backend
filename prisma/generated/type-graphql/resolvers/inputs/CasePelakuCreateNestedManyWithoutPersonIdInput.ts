import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePelakuCreateOrConnectWithoutPersonIdInput } from "../inputs/CasePelakuCreateOrConnectWithoutPersonIdInput";
import { CasePelakuCreateWithoutPersonIdInput } from "../inputs/CasePelakuCreateWithoutPersonIdInput";
import { CasePelakuWhereUniqueInput } from "../inputs/CasePelakuWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuCreateNestedManyWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => [CasePelakuCreateWithoutPersonIdInput], {
    nullable: true
  })
  create?: CasePelakuCreateWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuCreateOrConnectWithoutPersonIdInput], {
    nullable: true
  })
  connectOrCreate?: CasePelakuCreateOrConnectWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuWhereUniqueInput], {
    nullable: true
  })
  connect?: CasePelakuWhereUniqueInput[] | undefined;
}
