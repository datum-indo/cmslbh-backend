import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralCreateOrConnectWithoutClientInput } from "../inputs/CaseReferralCreateOrConnectWithoutClientInput";
import { CaseReferralCreateWithoutClientInput } from "../inputs/CaseReferralCreateWithoutClientInput";
import { CaseReferralWhereUniqueInput } from "../inputs/CaseReferralWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralCreateNestedManyWithoutClientInput {
  @TypeGraphQL.Field(_type => [CaseReferralCreateWithoutClientInput], {
    nullable: true
  })
  create?: CaseReferralCreateWithoutClientInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralCreateOrConnectWithoutClientInput], {
    nullable: true
  })
  connectOrCreate?: CaseReferralCreateOrConnectWithoutClientInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseReferralWhereUniqueInput[] | undefined;
}
