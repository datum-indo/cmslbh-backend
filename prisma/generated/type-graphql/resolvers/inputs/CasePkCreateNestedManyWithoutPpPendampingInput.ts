import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePkCreateOrConnectWithoutPpPendampingInput } from "../inputs/CasePkCreateOrConnectWithoutPpPendampingInput";
import { CasePkCreateWithoutPpPendampingInput } from "../inputs/CasePkCreateWithoutPpPendampingInput";
import { CasePkWhereUniqueInput } from "../inputs/CasePkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePkCreateNestedManyWithoutPpPendampingInput {
  @TypeGraphQL.Field(_type => [CasePkCreateWithoutPpPendampingInput], {
    nullable: true
  })
  create?: CasePkCreateWithoutPpPendampingInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePkCreateOrConnectWithoutPpPendampingInput], {
    nullable: true
  })
  connectOrCreate?: CasePkCreateOrConnectWithoutPpPendampingInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePkWhereUniqueInput], {
    nullable: true
  })
  connect?: CasePkWhereUniqueInput[] | undefined;
}
