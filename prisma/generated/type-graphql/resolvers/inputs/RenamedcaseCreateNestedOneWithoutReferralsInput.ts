import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutReferralsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutReferralsInput";
import { RenamedcaseCreateWithoutReferralsInput } from "../inputs/RenamedcaseCreateWithoutReferralsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutReferralsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutReferralsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutReferralsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutReferralsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutReferralsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
