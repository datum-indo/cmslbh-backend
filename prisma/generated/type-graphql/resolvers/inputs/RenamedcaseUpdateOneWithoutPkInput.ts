import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutPkInput } from "../inputs/RenamedcaseCreateOrConnectWithoutPkInput";
import { RenamedcaseCreateWithoutPkInput } from "../inputs/RenamedcaseCreateWithoutPkInput";
import { RenamedcaseUpdateWithoutPkInput } from "../inputs/RenamedcaseUpdateWithoutPkInput";
import { RenamedcaseUpsertWithoutPkInput } from "../inputs/RenamedcaseUpsertWithoutPkInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutPkInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutPkInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutPkInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutPkInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutPkInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutPkInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutPkInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutPkInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutPkInput | undefined;
}
